import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helpers to safely coerce the string-based form values coming from the client
const toBool = (v: any): boolean | null => {
  if (v === 'Yes') return true;
  if (v === 'No') return false;
  if (typeof v === 'boolean') return v;
  return null;
};

const toDate = (v: any): Date | null => {
  if (!v) return null;
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      residentialAddress,
      email,
      phone,
      homeTownAddress,
      nationality,
      placeOfBirth,
      dateOfBirth,
      maritalStatus,
      spouseName,
      spousePhone,
      kindOfMarriage,
      secularOccupation,
      placeOfWork,

      isRegenerated,
      regenerationExperience,
      churchName,
      pastorName,
      pastorPhone,
      roleInChurch,
      baptizedInWater,
      baptizedByImmersion,
      baptizedInHolySpirit,
      spiritualGifts,
      educationalBackground,

      spiritualBackground,
      ordinationDate,
      servicePosts,
      presentStationPost,
      recognizedAsPastorOrEvangelist,
      currentlyPastoring,
      calledToEstablishMinistry,
      spouseSupportsMinistry,

      program,

      currentAddress,
      occupation,
      illnesses,
      freeFromIllness,

      sponsorshipType,
      sponsorName,
      sponsorAddress,

      agreedToRules,
      agreedToConsequences,

      pastorRef,
      pastorMatrix,
      relativeRef,
      relativeMatrix,
    } = body;

    if (!fullName || !email || !phone || !residentialAddress || !program) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!agreedToRules || !agreedToConsequences) {
      return NextResponse.json(
        { error: 'You must accept the Rules & Regulations and the Consequences before submitting.' },
        { status: 400 }
      );
    }

    if (!pastorRef?.refereeName || !pastorRef?.refereeContact) {
      return NextResponse.json(
        { error: "The Pastor's Reference section must be completed before submitting." },
        { status: 400 }
      );
    }

    if (!relativeRef?.refereeName || !relativeRef?.refereeContact) {
      return NextResponse.json(
        { error: "The Relative's Reference section must be completed before submitting." },
        { status: 400 }
      );
    }

    const candidate = await prisma.candidate.create({
      data: {
        fullName,
        residentialAddress,
        email,
        phone,
        homeTownAddress: homeTownAddress || null,
        nationality: nationality || null,
        placeOfBirth: placeOfBirth || null,
        dateOfBirth: toDate(dateOfBirth),
        maritalStatus: maritalStatus || null,
        spouseName: spouseName || null,
        spousePhone: spousePhone || null,
        kindOfMarriage: kindOfMarriage || null,
        secularOccupation: secularOccupation || null,
        placeOfWork: placeOfWork || null,

        isRegenerated: toBool(isRegenerated),
        regenerationExperience: regenerationExperience || null,
        churchName: churchName || null,
        pastorName: pastorName || null,
        pastorPhone: pastorPhone || null,
        roleInChurch: roleInChurch || null,
        baptizedInWater: toBool(baptizedInWater),
        baptizedByImmersion: toBool(baptizedByImmersion),
        baptizedInHolySpirit: toBool(baptizedInHolySpirit),
        spiritualGifts: spiritualGifts || null,
        educationalBackground: educationalBackground || null,

        spiritualBackground: spiritualBackground || null,
        ordinationDate: toDate(ordinationDate),
        servicePosts: Array.isArray(servicePosts)
          ? servicePosts.filter((p: any) => p.station || p.post || p.date)
          : undefined,
        presentStationPost: presentStationPost || null,
        recognizedAsPastorOrEvangelist: toBool(recognizedAsPastorOrEvangelist),
        currentlyPastoring: toBool(currentlyPastoring),
        calledToEstablishMinistry: toBool(calledToEstablishMinistry),
        spouseSupportsMinistry: toBool(spouseSupportsMinistry),

        program,

        currentAddress: currentAddress || null,
        occupation: occupation || null,
        illnesses: Array.isArray(illnesses) ? illnesses : [],
        freeFromIllness: !!freeFromIllness,

        sponsorshipType: sponsorshipType || null,
        sponsorName: sponsorName || null,
        sponsorAddress: sponsorAddress || null,

        agreedToRules: !!agreedToRules,
        agreedToConsequences: !!agreedToConsequences,
        agreementDate: new Date(),

        references: {
          create: [
            {
              type: 'PASTOR',
              refereeName: pastorRef.refereeName,
              refereeContact: pastorRef.refereeContact,
              yearsKnown: pastorRef.yearsKnown ? parseInt(pastorRef.yearsKnown, 10) : null,
              monthsKnown: pastorRef.monthsKnown ? parseInt(pastorRef.monthsKnown, 10) : null,
              familiarityLevel: pastorRef.familiarityLevel || null,
              isGenuinelyBornAgain: toBool(pastorRef.isGenuinelyBornAgain),
              isBaptizedInWater: toBool(pastorRef.isBaptizedInWater),
              isBaptizedInHolySpirit: toBool(pastorRef.isBaptizedInHolySpirit),
              christianExperience: pastorRef.christianExperience || null,
              readyForTraining: pastorRef.readyForTraining || null,
              activeInChurchWork: pastorRef.activeInChurchWork || null,
              maritalLifeComment: pastorRef.maritalLifeComment || null,
              socialBackgroundComment: pastorRef.socialBackgroundComment || null,
              knowledgeMatrix: pastorMatrix || undefined,
              submittedAt: new Date(),
            },
            {
              type: 'RELATIVE',
              refereeName: relativeRef.refereeName,
              refereeContact: relativeRef.refereeContact,
              relationshipDuration: relativeRef.relationshipDuration || null,
              relationshipDescription: relativeRef.relationshipDescription || null,
              knownAsChristian: toBool(relativeRef.knownAsChristian),
              characterDescription: relativeRef.characterDescription || null,
              knowledgeMatrix: relativeMatrix || undefined,
              submittedAt: new Date(),
            },
          ],
        },
      },
      include: { references: true },
    });

    return NextResponse.json(candidate, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

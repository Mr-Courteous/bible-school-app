import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { candidateId, type, ...rest } = body;

    if (!candidateId || !type || !['PASTOR', 'RELATIVE'].includes(type)) {
      return NextResponse.json({ error: 'Missing or invalid candidateId/type' }, { status: 400 });
    }

    const candidate = await prisma.candidate.findUnique({ where: { id: candidateId } });
    if (!candidate) {
      return NextResponse.json({ error: 'Candidate not found' }, { status: 404 });
    }

    const reference = await prisma.reference.create({
      data: {
        candidateId,
        type,
        refereeName: rest.refereeName || null,
        refereeContact: rest.refereeContact || null,

        yearsKnown: rest.yearsKnown ? parseInt(rest.yearsKnown, 10) : null,
        monthsKnown: rest.monthsKnown ? parseInt(rest.monthsKnown, 10) : null,
        familiarityLevel: rest.familiarityLevel || null,
        isGenuinelyBornAgain: rest.isGenuinelyBornAgain === 'Yes' ? true : rest.isGenuinelyBornAgain === 'No' ? false : null,
        isBaptizedInWater: rest.isBaptizedInWater === 'Yes' ? true : rest.isBaptizedInWater === 'No' ? false : null,
        isBaptizedInHolySpirit: rest.isBaptizedInHolySpirit === 'Yes' ? true : rest.isBaptizedInHolySpirit === 'No' ? false : null,
        christianExperience: rest.christianExperience || null,
        readyForTraining: rest.readyForTraining || null,
        activeInChurchWork: rest.activeInChurchWork || null,
        maritalLifeComment: rest.maritalLifeComment || null,
        socialBackgroundComment: rest.socialBackgroundComment || null,

        relationshipDuration: rest.relationshipDuration || null,
        relationshipDescription: rest.relationshipDescription || null,
        knownAsChristian: rest.knownAsChristian === 'Yes' ? true : rest.knownAsChristian === 'No' ? false : null,
        characterDescription: rest.characterDescription || null,

        knowledgeMatrix: rest.knowledgeMatrix || undefined,
        submittedAt: new Date(),
      },
    });

    return NextResponse.json(reference, { status: 201 });
  } catch (error) {
    console.error('Reference submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

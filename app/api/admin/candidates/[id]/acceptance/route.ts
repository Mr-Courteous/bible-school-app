import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { dateOfResumption, dislikes, refereeGuarantorInfo, officialPost, directorSigned, registrarSigned } = body;

    const acceptance = await prisma.acceptance.upsert({
      where: { candidateId: id },
      create: {
        candidateId: id,
        dateOfResumption: dateOfResumption ? new Date(dateOfResumption) : null,
        dislikes: dislikes || null,
        refereeGuarantorInfo: refereeGuarantorInfo || null,
        officialPost: officialPost || null,
        directorSignedAt: directorSigned ? new Date() : null,
        registrarSignedAt: registrarSigned ? new Date() : null,
      },
      update: {
        dateOfResumption: dateOfResumption ? new Date(dateOfResumption) : null,
        dislikes: dislikes || null,
        refereeGuarantorInfo: refereeGuarantorInfo || null,
        officialPost: officialPost || null,
        ...(directorSigned ? { directorSignedAt: new Date() } : {}),
        ...(registrarSigned ? { registrarSignedAt: new Date() } : {}),
      },
    });

    return NextResponse.json(acceptance);
  } catch (error) {
    console.error('Acceptance update error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

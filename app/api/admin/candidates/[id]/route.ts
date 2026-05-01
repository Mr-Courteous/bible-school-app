import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// UPDATE candidate status or details
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status, fullName, email, phone, program } = body;

    const candidate = await prisma.candidate.update({
      where: { id: params.id },
      data: {
        status,
        fullName,
        email,
        phone,
        program,
      },
    });

    return NextResponse.json(candidate);
  } catch (error) {
    console.error('Update candidate error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// DELETE candidate
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.candidate.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    console.error('Delete candidate error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

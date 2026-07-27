import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Public, minimal lookup used by the referee-facing reference forms.
// Only ever returns the applicant's name — never contact or application data.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const candidate = await prisma.candidate.findUnique({
      where: { id },
      select: { id: true, fullName: true, program: true },
    });

    if (!candidate) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(candidate);
  } catch (error) {
    console.error('Candidate lookup error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

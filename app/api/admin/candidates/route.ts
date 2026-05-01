import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all candidates
export async function GET() {
  try {
    const candidates = await prisma.candidate.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(candidates);
  } catch (error) {
    console.error('Fetch candidates error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

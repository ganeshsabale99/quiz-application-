export interface User {
  id: string;
  email: string;
  name: string;
  role: 'super-admin' | 'admin' | 'expert' | 'member';
  phone?: string;
  clientId?: string;
  isVerified?: boolean;
  createdAt: Date;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
  settings: {
    theme: string;
    features: string[];
  };
  createdAt: Date;
}

export interface Question {
  id: string;
  title: string;
  type: 'objective' | 'subjective' | 'audio' | 'video' | 'image';
  complexity: 'normal' | 'intermediate' | 'high';
  category: string;
  content: string;
  options?: string[];
  correctAnswer: string | number;
  points: number;
  expertId: string;
  isLocked: boolean;
  isApproved: boolean;
  createdAt: Date;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
  duration: number; // in minutes
  passingScore: number;
  fee: number;
  maxAttempts: number;
  scheduleStart: Date;
  scheduleEnd: Date;
  isActive: boolean;
  createdAt: Date;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  answers: Record<string, any>;
  score: number;
  startTime: Date;
  endTime?: Date;
  isCompleted: boolean;
  timeSpent: number;
}

export interface Payment {
  id: string;
  userId: string;
  quizId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
  createdAt: Date;
}
import React from 'react';
import { BookOpen, Clock, Award, TrendingUp, Play, CheckCircle } from 'lucide-react';

const MemberDashboard: React.FC = () => {
  const stats = [
    { name: 'Quizzes Taken', value: '24', icon: BookOpen, color: 'bg-blue-500' },
    { name: 'Average Score', value: '85%', icon: Award, color: 'bg-green-500' },
    { name: 'Time Spent', value: '48h', icon: Clock, color: 'bg-purple-500' },
    { name: 'Rank', value: '#12', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
        <p className="text-gray-600">Continue your learning journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Quizzes</h3>
          <div className="space-y-4">
            {[
              { name: 'JavaScript Fundamentals', duration: '30 min', difficulty: 'Beginner', fee: '$10', enrolled: false },
              { name: 'React Advanced', duration: '45 min', difficulty: 'Advanced', fee: '$15', enrolled: true },
              { name: 'Node.js Backend', duration: '60 min', difficulty: 'Intermediate', fee: '$12', enrolled: false },
            ].map((quiz) => (
              <div key={quiz.name} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{quiz.name}</p>
                  <span className="text-sm font-medium text-green-600">{quiz.fee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{quiz.duration}</span>
                    <span>•</span>
                    <span>{quiz.difficulty}</span>
                  </div>
                  <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    quiz.enrolled
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}>
                    {quiz.enrolled ? (
                      <div className="flex items-center space-x-1">
                        <Play className="h-4 w-4" />
                        <span>Start Quiz</span>
                      </div>
                    ) : (
                      'Enroll Now'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Results</h3>
            <div className="space-y-3">
              {[
                { name: 'HTML & CSS Basics', score: 92, date: 'Dec 10, 2024' },
                { name: 'JavaScript ES6', score: 88, date: 'Dec 8, 2024' },
                { name: 'React Hooks', score: 95, date: 'Dec 5, 2024' },
              ].map((result) => (
                <div key={result.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{result.name}</p>
                    <p className="text-sm text-gray-600">{result.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-green-600">{result.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Exams</h3>
            <div className="space-y-3">
              {[
                { name: 'Final Assessment', date: 'Dec 15, 2024', time: '10:00 AM' },
                { name: 'Certification Exam', date: 'Dec 20, 2024', time: '2:00 PM' },
              ].map((exam) => (
                <div key={exam.name} className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-gray-900">{exam.name}</p>
                  <p className="text-sm text-gray-600">{exam.date} at {exam.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
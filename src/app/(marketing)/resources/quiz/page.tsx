"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const questions = [
  {
    id: 1,
    question: "How much time does your team spend on repetitive tasks weekly?",
    options: [
      { label: "Less than 5 hours", score: 1 },
      { label: "5-15 hours", score: 2 },
      { label: "15-30 hours", score: 3 },
      { label: "More than 30 hours", score: 4 },
    ],
  },
  {
    id: 2,
    question: "Which best describes your current use of AI tools?",
    options: [
      { label: "We don't use any AI", score: 1 },
      { label: "We've tried ChatGPT occasionally", score: 2 },
      { label: "We use 1-2 AI tools regularly", score: 3 },
      { label: "AI is part of our daily workflow", score: 4 },
    ],
  },
  {
    id: 3,
    question: "How do you currently handle customer inquiries?",
    options: [
      { label: "All manual responses", score: 1 },
      { label: "Some templates, mostly manual", score: 2 },
      { label: "Automated FAQ, manual complex issues", score: 3 },
      { label: "Mostly automated with human escalation", score: 4 },
    ],
  },
  {
    id: 4,
    question: "What's your biggest operational pain point?",
    options: [
      { label: "Content creation (marketing, product descriptions)", score: 2, area: "marketing" },
      { label: "Customer support response times", score: 2, area: "service" },
      { label: "Data entry and report generation", score: 2, area: "operations" },
      { label: "Knowledge management and documentation", score: 2, area: "knowledge" },
    ],
  },
  {
    id: 5,
    question: "How many different software tools does your team use daily?",
    options: [
      { label: "1-3 tools", score: 1 },
      { label: "4-7 tools", score: 2 },
      { label: "8-12 tools", score: 3 },
      { label: "More than 12 tools", score: 4 },
    ],
  },
  {
    id: 6,
    question: "What's your team size?",
    options: [
      { label: "Just me", score: 1 },
      { label: "2-5 people", score: 2 },
      { label: "6-20 people", score: 3 },
      { label: "More than 20", score: 4 },
    ],
  },
  {
    id: 7,
    question: "How would you rate your current tech stack integration?",
    options: [
      { label: "Everything is manual/disconnected", score: 1 },
      { label: "Some tools talk to each other", score: 2 },
      { label: "Most tools are integrated", score: 3 },
      { label: "Fully integrated ecosystem", score: 4 },
    ],
  },
  {
    id: 8,
    question: "What's holding you back from adopting more AI?",
    options: [
      { label: "Don't know where to start", score: 1 },
      { label: "Worried about cost/ROI", score: 2 },
      { label: "Security/privacy concerns", score: 2 },
      { label: "Already satisfied with current tools", score: 3 },
    ],
  },
  {
    id: 9,
    question: "How quickly do you need to see results from new technology?",
    options: [
      { label: "Within a week", score: 4 },
      { label: "Within a month", score: 3 },
      { label: "Within a quarter", score: 2 },
      { label: "Willing to wait 6+ months", score: 1 },
    ],
  },
  {
    id: 10,
    question: "What's your annual revenue?",
    options: [
      { label: "Under $500K", score: 1 },
      { label: "$500K - $2M", score: 2 },
      { label: "$2M - $10M", score: 3 },
      { label: "Over $10M", score: 4 },
    ],
  },
];

type Category = "early_stage" | "workflow_friction" | "roi_ready";

const results: Record<Category, { title: string; description: string; nextSteps: string[] }> = {
  early_stage: {
    title: "Early Stage Explorer",
    description:
      "You're at the beginning of your AI journey—and that's a great place to be. There's significant opportunity to leapfrog competitors who are still figuring things out.",
    nextSteps: [
      "Start with our AI Mistakes Guide to avoid common pitfalls",
      "Identify one high-repetition task that eats up time",
      "Consider a quick assessment to map your opportunities",
    ],
  },
  workflow_friction: {
    title: "Workflow Friction Zone",
    description:
      "You're feeling the pain of manual work and scattered tools. Good news: this is exactly where AI shines. You have clear friction points that are ready for automation.",
    nextSteps: [
      "Focus on your biggest time-sink first",
      "Look for tools that integrate with what you already use",
      "A 30-day sprint could transform your daily operations",
    ],
  },
  roi_ready: {
    title: "ROI Ready",
    description:
      "You've got the foundation in place and you're ready to see real returns from AI. The question isn't whether to adopt AI—it's which workflows will drive the most value.",
    nextSteps: [
      "Prioritize by potential time/cost savings",
      "Consider embedded AI over standalone tools",
      "An assessment will identify $50K+ in annual savings",
    ],
  },
};

function getCategory(score: number): Category {
  if (score <= 18) return "early_stage";
  if (score <= 30) return "workflow_friction";
  return "roi_ready";
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const category = getCategory(totalScore);
  const result = results[category];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <div className="mx-auto mb-8 max-w-sm">
                <Image
                  src="/images/quiz-result.png"
                  alt="AI Struggle Bus reaching a destination milestone"
                  width={400}
                  height={280}
                  className="mx-auto rounded-2xl"
                />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {result.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Score: {totalScore} / {questions.length * 4}
              </p>
            </div>

            <Card className="mt-12 rounded-2xl border-2 border-secondary">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground">
                  {result.description}
                </p>

                <div className="mt-8">
                  <h3 className="font-semibold text-foreground">
                    Recommended next steps:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {result.nextSteps.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button className="flex-1" asChild>
                    <Link href="/assessment">Get an Assessment</Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href="/book">Talk to a Guide</Link>
                  </Button>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers([]);
                      setShowResults(false);
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Take the quiz again
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm text-muted-foreground">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <Card className="rounded-2xl border-2 border-secondary">
            <CardHeader>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full rounded-xl border-2 border-secondary bg-background p-4 text-left transition-all hover:border-primary hover:bg-primary/5"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Your answers are not stored. This quiz is just for you.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Trophy, RotateCcw, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../components/Button";

export default function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const correct = state?.correct ?? 0;
  const passed = state?.passed ?? 0;

  const total = correct + passed;

  const accuracy =
    total === 0
      ? 0
      : Math.round((correct / total) * 100);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <Trophy
        size={90}
        className="mb-6 text-orange-500"
      />

      <h1 className="text-4xl font-black text-white">
        Time's Up!
      </h1>

      <div className="mt-10 w-full max-w-sm rounded-3xl bg-[#151E2E] p-8">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Correct
          </span>

          <span className="text-2xl font-black text-green-400">
            {correct}
          </span>
        </div>

        <div className="mt-6 flex justify-between">
          <span className="text-slate-400">
            Passed
          </span>

          <span className="text-2xl font-black text-red-400">
            {passed}
          </span>
        </div>

        <div className="mt-6 flex justify-between">
          <span className="text-slate-400">
            Total
          </span>

          <span className="text-2xl font-black text-white">
            {total}
          </span>
        </div>

        <div className="mt-6 flex justify-between">
          <span className="text-slate-400">
            Accuracy
          </span>

          <span className="text-2xl font-black text-orange-400">
            {accuracy}%
          </span>
        </div>

      </div>

      <div className="mt-10 flex w-full max-w-sm flex-col gap-4">

        <Button
          icon={<RotateCcw size={20} />}
          onClick={() => navigate("/categories")}
        >
          Play Again
        </Button>

        <Button
          variant="secondary"
          icon={<Home size={20} />}
          onClick={() => navigate("/")}
        >
          Home
        </Button>

      </div>

    </div>
  );
}
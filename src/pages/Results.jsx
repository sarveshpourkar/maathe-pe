import { Trophy, CheckCircle, SkipForward } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const correct = state?.correct ?? 0;
  const passed = state?.passed ?? 0;
  const total = correct + passed;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Trophy size={80} className="mb-6 text-orange-500" />

      <h1 className="text-4xl font-black text-white">
        Time's Up!
      </h1>

      <p className="mt-2 text-slate-400">
        Here's how you did
      </p>

      <div className="mt-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#151E2E] p-8">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400" />
            <span className="text-white">Correct</span>
          </div>

          <span className="text-3xl font-black text-green-400">
            {correct}
          </span>
        </div>

        <div className="my-6 h-px bg-white/10" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SkipForward className="text-red-400" />
            <span className="text-white">Passed</span>
          </div>

          <span className="text-3xl font-black text-red-400">
            {passed}
          </span>
        </div>

        <div className="my-6 h-px bg-white/10" />

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-slate-300">
            Total Attempted
          </span>

          <span className="text-4xl font-black text-orange-400">
            {total}
          </span>
        </div>

      </div>

      <div className="mt-10 flex w-full max-w-md flex-col gap-4">
        <Button onClick={() => navigate("/")}>
          Play Again
        </Button>

        <Button
          variant="secondary"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
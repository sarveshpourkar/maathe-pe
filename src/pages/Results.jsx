import { Trophy } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";


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

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const performance = useMemo(() => {
    if (correct >= 50) {
      return {
        title: "Unstoppable 👑",
        message:
          "You absolutely dominated this round.",
        color: "text-yellow-400",
      };
    }

    if (correct >= 36) {
      return {
        title: "Legend 🏆",
        message:
          "Amazing performance. Your friends never stood a chance.",
        color: "text-orange-400",
      };
    }

    if (correct >= 21) {
      return {
        title: "Awesome 🔥",
        message:
          "Great job! You're getting really good.",
        color: "text-green-400",
      };
    }

    if (correct >= 11) {
      return {
        title: "Good Job 👏",
        message:
          "Nice round. Keep practicing!",
        color: "text-blue-400",
      };
    }

    return {
      title: "Keep Practicing 💪",
      message:
        "Every game makes you better.",
      color: "text-slate-300",
    };
  }, [correct]);

  function StatCard({ label, value, color, suffix = "" }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#151E2E] p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/10">
      <p className="text-sm text-slate-400">{label}</p>

      <h2 className={`mt-2 text-3xl font-black ${color}`}>
        {value}
        {suffix}
      </h2>
    </div>
  );
}

  return (
    <>
     {/* <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={250}
      /> */}

      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-8 text-center">

        <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 p-8 shadow-[0_0_60px_rgba(250,204,21,0.25)]">

          <Trophy
            size={90}
            className="text-yellow-400"
          />

        </div>

        <h1
          className={`mt-8 text-5xl font-black ${performance.color}`}
        >
          {performance.title}
        </h1>

        <p className="mt-4 max-w-sm text-base leading-7 text-slate-400">
          {performance.message}
        </p>

        <div className="mt-10 grid w-full max-w-md grid-cols-2 gap-4">
                    <StatCard
  label="Correct"
  value={correct}
  color="text-green-400"
/>

<StatCard
  label="Passed"
  value={passed}
  color="text-red-400"
/>

<StatCard
  label="Total"
  value={total}
  color="text-white"
/>

<StatCard
  label="Accuracy"
  value={accuracy}
  color="text-orange-400"
  suffix="%"
/>
        </div>

        <div className="mt-10 w-full max-w-md space-y-4">

          <button
  onClick={() => navigate("/categories")}
  className="w-full rounded-3xl bg-orange-500 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-400 active:scale-95"
>
  Play Again
</button>

          <button
  onClick={() => navigate("/")}
  className="w-full rounded-2xl border border-white/10 bg-[#151E2E] py-4 text-lg font-bold text-white hover:bg-[#1B2638] active:scale-95 transition"
>
  🏠 Home
</button>

        </div>

      </div>
    </>
  );
}
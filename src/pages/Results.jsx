import { Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Results() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 text-center">
      <Trophy size={80} className="mb-6 text-orange-500" />

      <h1 className="text-4xl font-bold text-white">
        Time's Up!
      </h1>

      <p className="mt-3 text-white/70">
        Results screen is ready.
      </p>

      <div className="mt-10">
        <Button onClick={() => navigate("/")}>
          Play Again
        </Button>
      </div>
    </div>
  );
}
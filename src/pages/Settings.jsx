import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  Settings as SettingsIcon,
  Volume2,
  Smartphone,
  Timer,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col px-6 py-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-slate-400 transition-all duration-200 hover:-translate-x-1 hover:text-orange-400"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/15">
            <SettingsIcon
              size={34}
              className="text-orange-400"
            />
          </div>

          <div>
            <h1 className="text-5xl font-black text-white">
              Settings
            </h1>

            <p className="mt-2 text-slate-400">
              Customize your experience
            </p>
          </div>

        </div>
      </motion.div>

      {/* Options */}

      <div className="mt-12 space-y-4">

        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#151E2E] p-5">

          <div className="flex items-center gap-4">

            <Volume2 className="text-orange-400" />

            <div>
              <h3 className="font-semibold text-white">
                Sound
              </h3>

              <p className="text-sm text-slate-400">
                Coming Soon
              </p>
            </div>

          </div>

          <ChevronRight className="text-slate-500" />

        </div>

        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#151E2E] p-5">

          <div className="flex items-center gap-4">

            <Smartphone className="text-orange-400" />

            <div>
              <h3 className="font-semibold text-white">
                Vibration
              </h3>

              <p className="text-sm text-slate-400">
                Coming Soon
              </p>
            </div>

          </div>

          <ChevronRight className="text-slate-500" />

        </div>

        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#151E2E] p-5">

          <div className="flex items-center gap-4">

            <Timer className="text-orange-400" />

            <div>
              <h3 className="font-semibold text-white">
                Game Timer
              </h3>

              <p className="text-sm text-slate-400">
                60 Seconds
              </p>
            </div>

          </div>

          <ChevronRight className="text-slate-500" />

        </div>

        <button
          onClick={() => navigate("/about")}
          className="group flex w-full items-center justify-between rounded-3xl border border-white/10 bg-[#151E2E] p-5 transition-all duration-300 hover:border-orange-400/40 hover:bg-[#1B2638]"
        >

          <div className="flex items-center gap-4">

            <Info className="text-orange-400" />

            <div className="text-left">
              <h3 className="font-semibold text-white">
                About
              </h3>

              <p className="text-sm text-slate-400">
                Learn more about the app
              </p>
            </div>

          </div>

          <ChevronRight className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-orange-400" />

        </button>

      </div>
    </div>
  );
}
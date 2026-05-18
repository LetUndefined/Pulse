import { useState } from "react";
import { useNavigate } from "react-router";
import { PARTNER_SIGN_IN } from "../../services/Auth";

const inputClass = "w-full bg-bg3 border border-white/20 rounded-lg px-4 py-3 text-text text-sm placeholder:text-text3 focus:outline-none focus:border-neon transition-colors";

const labelClass = "block text-sm text-text mb-1.5 font-semibold";

export default function PartnerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { success, error } = await PARTNER_SIGN_IN(email, password);
    setLoading(false);
    if (!success) return setError(error);

    navigate("/partner/dashboard");
  };

  return (
    <div className="min-h-screen bg-bg2 flex items-center justify-center px-4 ">
      <div className="w-full max-w-2xl ">
        <div className="mb-10">
          <h1 className="text-text text-4xl font-bold tracking-tight">
            Pulse<span className="text-neon">.</span>
          </h1>
          <p className="text-neon text-xs font-semibold tracking-widest mt-1">PARTNER PORTAL</p>
          <p className="text-text3 text-sm mt-3">Sign in to manage your events.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" placeholder="you@example.com" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label className={labelClass}>Password</label>
            <input type="password" placeholder="••••••••" className={inputClass} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button type="submit" disabled={loading} className="w-full bg-neon text-black font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 mt-2">
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { useNavigate } from "react-router";
import { INSERT_EVENT } from "../../services/InsertEvent";

const inputClass = "w-full bg-bg border border-white/20 rounded-lg px-4 py-3 text-text text-sm placeholder:text-text3 focus:outline-none focus:border-neon transition-colors";

const labelClass = "block text-sm text-text mb-1.5 font-semibold";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [form, setForm] = useState({
    title: "",
    category: "",
    start_date: "",
    start_time: "",
    end_time: "",
    source: "",
    street: "",
    number: "",
    postal_code: "",
    city: "",
    country: "",
    ticket_url: "",
    price: 0,
    child_friendly: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const address = `${form.street} ${form.number}, ${form.postal_code} ${form.city}, ${form.country}`;
      await INSERT_EVENT({ ...form, address, status: "pending" }, image);
      navigate("/partner/partner-events");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.type === "checkbox") return setForm((prev) => ({ ...prev, child_friendly: (e.target as HTMLInputElement).checked }));
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-text text-2xl">Create Event</h1>
        <p className="text-text3">Submit a new event for review</p>
      </div>

      <form onSubmit={onSubmit} className="border border-white/20 bg-bg3 rounded-xl p-8 flex flex-col gap-6">
        <div>
          <label className={labelClass}>Event Title</label>
          <input name="title" type="text" placeholder="e.g., Fuse Night, De School Open Air" className={inputClass} onChange={onChange} value={form.title} />
        </div>

        <div>
          <label className={labelClass}>Category</label>
          <select name="category" className={inputClass} onChange={onChange} value={form.category}>
            <option value="">Select a category</option>
            <option value="music">Music</option>
            <option value="food">Food</option>
            <option value="sport">Sport</option>
            <option value="community">Community</option>
            <option value="art">Art</option>
            <option value="nightlife">Nightlife</option>
            <option value="market">Market</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Start Date</label>
          <input name="start_date" type="date" className={inputClass} onChange={onChange} value={form.start_date} />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className={labelClass}>Start Time</label>
            <input name="start_time" type="time" className={inputClass} onChange={onChange} value={form.start_time} />
          </div>
          <div className="flex-1">
            <label className={labelClass}>End Time</label>
            <input name="end_time" type="time" className={inputClass} onChange={onChange} value={form.end_time} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Venue</label>
          <input name="source" type="text" placeholder="e.g., Versuz, AB, Ancienne Belgique..." className={inputClass} onChange={onChange} value={form.source} />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className={labelClass}>Street</label>
            <input name="street" type="text" placeholder="e.g., Rue de la Loi" className={inputClass} onChange={onChange} value={form.street} />
          </div>
          <div className="w-24">
            <label className={labelClass}>Number</label>
            <input name="number" type="text" placeholder="1" className={inputClass} onChange={onChange} value={form.number} />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-32">
            <label className={labelClass}>Postal Code</label>
            <input name="postal_code" type="text" placeholder="1000" className={inputClass} onChange={onChange} value={form.postal_code} />
          </div>
          <div className="flex-1">
            <label className={labelClass}>City</label>
            <input name="city" type="text" placeholder="e.g., Brussels" className={inputClass} onChange={onChange} value={form.city} />
          </div>
          <div className="flex-1">
            <label className={labelClass}>Country</label>
            <input name="country" type="text" placeholder="e.g., Belgium" className={inputClass} onChange={onChange} value={form.country} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Ticket / Website URL (Optional)</label>
          <input name="ticket_url" type="url" placeholder="e.g., https://ra.co/events/..." className={inputClass} onChange={onChange} value={form.ticket_url} />
        </div>

        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className={labelClass}>Price (€)</label>
            <input name="price" type="number" placeholder="0" min="0" className={inputClass} onChange={onChange} value={form.price} />
          </div>
          <div className="flex-1 flex items-center gap-3 pb-2.5">
            <label className="relative inline-flex items-center cursor-pointer">
              <input name="child_friendly" type="checkbox" className="sr-only peer" onChange={onChange} checked={form.child_friendly} />
              <div className="w-10 h-6 bg-white/10 rounded-full peer peer-checked:bg-neon transition-colors duration-200 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4" />
            </label>
            <span className="text-sm text-text">Family friendly</span>
          </div>
        </div>

        <div>
          <p className="text-xs text-text3 mb-2">For best results, use a landscape or square image. Portrait images will be cropped.</p>
          <label className="border border-dashed border-white/20 rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-neon/40 transition-colors">
            <input type="file" accept="image/png, image/jpeg" className="hidden" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />
            {image ? (
              <div className="w-full">
                <img src={URL.createObjectURL(image)} className="w-full rounded-lg object-cover" style={{ height: 180 }} />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-sm">
                <LuUpload size={28} className="text-text3" />
                <p className="text-sm text-text">Click to upload your Flyer</p>
                <p className="text-xs text-text3">PNG, JPG up to 10MB</p>
              </div>
            )}
          </label>{" "}
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex gap-3 pt-2">
          <button type="button" onClick={() => navigate("/partner/dashboard")} className="px-6 py-2.5 rounded-lg border border-white/20 text-text text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
            Cancel
          </button>
          <button type="submit" disabled={loading} className="px-6 py-2.5 rounded-lg bg-neon text-black text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50">
            {loading ? "Submitting..." : "Submit for Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;

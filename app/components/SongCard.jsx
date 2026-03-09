export default function SongCard({title, year, album}) {
  return (
    <div className="bg-[#140404] p-6 rounded-xl border border-red-900">

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {year} • {album}
      </p>

    </div>
  );
}

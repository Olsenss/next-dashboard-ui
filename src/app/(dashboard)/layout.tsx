export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
    {/* LEFT */}
    <div className="w-1/6 bg-blue-200">l</div>
    {/* RIGHT */}
    <div className="w-5/6 bg-red-200">r</div>
    </div>
  );
//   https://youtu.be/myYlGLFxZas?si=WSrW-gO6QQ4pPtOD&t=814
}

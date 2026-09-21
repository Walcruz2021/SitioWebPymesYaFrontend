import SocialShare from "./SocialShare";

export default function DemoSocialShare({ title, description, url }) {
  return (
    <div className="bg-[#050506] flex items-center justify-center mb-10 pb-10">
      <div className="w-full max-w-2xl">
        <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/30 mb-2 text-center">
          Vista previa
        </p>
        <h1 className="text-2xl font-black text-white tracking-tight mb-10 text-center">
          Componente de compartir
        </h1>
        <SocialShare
          title={title}
          description={description}
          url={url}
        />
      </div>
    </div>
  );
}
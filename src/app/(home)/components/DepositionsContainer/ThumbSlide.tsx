import Image from 'next/image'

interface ThumbSlideHeroSectionProps {
  thumbUrl: string
}
export function SlideThumb({ thumbUrl }: ThumbSlideHeroSectionProps) {
  return (
    <div className="thumb_slide_hero cursor-pointer">
      <img
        loading="lazy"
        className="h-[60px] w-auto md:h-auto md:w-[68px]"
        width={68}
        height={68}
        src={thumbUrl}
        alt="Imagem de thumb"
      />
    </div>
  )
}

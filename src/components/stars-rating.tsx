import { Star } from 'lucide-react'

interface StarsRatingProps {
  rating: number
  totalRatings: number
}

export default function StarsRating({ rating, totalRatings }: StarsRatingProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Star
          // biome-ignore lint/suspicious/noArrayIndexKey: safe here
          key={idx}
          className={`size-4 ${idx < rating ? 'text-yellow-400' : 'text-muted-foreground'}`}
        />
      ))}
      <p className="text-muted-foreground text-sm">({totalRatings} ratings)</p>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Promotion } from '@/lib/types'
import { X } from 'lucide-react'

type PromotionsProps = {
  promotions: Promotion[]
}

export default function Promotions({ promotions }: PromotionsProps) {
  const [dismissedPromotions, setDismissedPromotions] = useState<string[]>([])
  const [popupDismissed, setPopupDismissed] = useState(false)

  const announcementBarPromotions = promotions.filter(
    (p) => p.type === 'announcement_bar' && !dismissedPromotions.includes(p.id)
  )
  const bannerPromotions = promotions.filter(
    (p) => p.type === 'banner' && !dismissedPromotions.includes(p.id)
  )
  const popupPromotions = promotions.filter(
    (p) => p.type === 'popup' && !popupDismissed && !dismissedPromotions.includes(p.id)
  )

  const dismissPromotion = (id: string) => {
    setDismissedPromotions((prev) => [...prev, id])
  }

  return (
    <>
      {/* Announcement Bars */}
      {announcementBarPromotions.map((promo) => (
        <div
          key={promo.id}
          className="w-full bg-[#EB5324] text-white py-2 px-4"
        >
          <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-4">
            <div className="flex-1 text-center text-sm font-medium">
              {promo.content || promo.title}
            </div>
            {promo.cta_text && promo.cta_link && (
              <Link
                href={promo.cta_link}
                className="text-white underline text-sm font-semibold hover:no-underline"
              >
                {promo.cta_text}
              </Link>
            )}
            <button
              onClick={() => dismissPromotion(promo.id)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      {/* Banners */}
      {bannerPromotions.length > 0 && (
        <div className="w-full">
          {bannerPromotions.map((promo) => (
            <div
              key={promo.id}
              className="relative bg-gray-100"
            >
              <div className="max-w-[1800px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {promo.banner_image && (
                  <div className="w-full md:w-1/2">
                    <img
                      src={promo.banner_image}
                      alt={promo.title}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                  {promo.content && (
                    <p className="text-gray-600 mb-4">{promo.content}</p>
                  )}
                  {promo.cta_text && promo.cta_link && (
                    <Link
                      href={promo.cta_link}
                      className="inline-flex items-center px-6 py-3 bg-[#EB5324] text-white font-semibold rounded-full hover:bg-[#d4481f] transition-colors"
                    >
                      {promo.cta_text}
                    </Link>
                  )}
                </div>
              </div>
              <button
                onClick={() => dismissPromotion(promo.id)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Popup */}
      {popupPromotions.length > 0 && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setPopupDismissed(true)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <button
              onClick={() => setPopupDismissed(true)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            {popupPromotions[0].banner_image && (
              <div className="mb-4">
                <img
                  src={popupPromotions[0].banner_image}
                  alt={popupPromotions[0].title}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{popupPromotions[0].title}</h3>
            {popupPromotions[0].content && (
              <p className="text-gray-600 mb-4">{popupPromotions[0].content}</p>
            )}
            {popupPromotions[0].cta_text && popupPromotions[0].cta_link && (
              <Link
                href={popupPromotions[0].cta_link}
                className="inline-flex items-center px-6 py-3 bg-[#EB5324] text-white font-semibold rounded-full hover:bg-[#d4481f] transition-colors"
                onClick={() => setPopupDismissed(true)}
              >
                {popupPromotions[0].cta_text}
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}

import { useEffect, useState } from 'react'
import './SupportPopup.css'

const STORAGE_KEY = 'supportPopupExpiry'
const DAYS_UNTIL_RESHOWN = 1 //for now 1, in production 30

function shouldShowPopup() {
  // In development, always show for testing
  if (import.meta.env.DEV) return true;

  // In production, check localStorage expiry
  const expiry = localStorage.getItem(STORAGE_KEY)
  if (!expiry) return true
  return Date.now() > parseInt(expiry)
}

function markDismissed() {
  const expiry = Date.now() + DAYS_UNTIL_RESHOWN * 24 * 60 * 60 * 1000
  localStorage.setItem(STORAGE_KEY, expiry)
}

export default function SupportPopup({
  delay = 9000,
  youtubLink = '#',
  hireLink = '#',
  email = '#'
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!shouldShowPopup()) return

    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  function handleClose() {
    setVisible(false)
    markDismissed()
  }

  if (!visible) return null

  return (
    <div className="sp-overlay" role="dialog" aria-modal="true">
      <div className="sp-box">
        <h2 className="sp-title">No ads. No payments. 😇</h2>

        <p className="sp-text">But, if you enjoy this site, you can still support it by:</p>

        <ul className="sp-list">
          <li>
            Following on social media and subscribe on Youtube 
            {/* <a href={youtubLink} target="_blank" rel="noreferrer">
              YouTube
            </a> */}
          </li>
          <li>
            Hire us to design your web (or just send some love to our email)
            {/* Hire <a href={hireLink} target="_blank" rel="noreferrer">us</a> to design your web */}
          </li>
          <li>Sending your wishes 🙏 and signing up</li>
        </ul>

        <p className="sp-text">
          We keep updating — come back again and invite friends 😁
        </p>

        <button className="sp-close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
}

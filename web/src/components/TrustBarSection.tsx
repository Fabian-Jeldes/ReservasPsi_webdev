import { Fragment } from 'react'
import { TRUST_BAR_DATA } from '../data/site'

export function TrustBarSection() {
  const { eyebrow, institutions } = TRUST_BAR_DATA

  return (
    <section
      aria-label="Formación y práctica clínica"
      className="w-full border-y bg-transparent py-6 lg:py-8"
      style={{ borderColor: 'var(--trust-bar-border)' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p
          className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.2em] lg:text-[11px]"
          style={{
            color: 'var(--trust-bar-label)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {eyebrow}
        </p>

        {/* Vista Desktop (>= 1024px): los 6 enlaces centrados en una sola línea horizontal */}
        <ul className="hidden list-none flex-wrap items-center justify-center gap-x-5 gap-y-2 p-0 lg:flex">
          {institutions.map((institution, idx) => (
            <Fragment key={institution.name}>
              <li>
                <a
                  href={institution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-editorial trust-bar-item cursor-pointer text-sm tracking-wide lg:text-base"
                >
                  {institution.name}
                </a>
              </li>
              {idx < institutions.length - 1 && (
                <li aria-hidden="true">
                  <span
                    className="select-none text-sm"
                    style={{ color: 'var(--trust-bar-dot)' }}
                  >
                    ·
                  </span>
                </li>
              )}
            </Fragment>
          ))}
        </ul>

        {/* Vista Mobile (< 1024px): carrusel infinito horizontal pausable al tocar/hover */}
        <div className="trust-marquee-wrapper lg:hidden">
          <div className="trust-marquee-track">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                aria-hidden={copyIndex === 1}
                className={`flex shrink-0 items-center gap-5 pr-5 ${
                  copyIndex === 1 ? 'trust-marquee-duplicate' : ''
                }`}
              >
                {institutions.map((institution) => (
                  <Fragment key={`${copyIndex}-${institution.name}`}>
                    <a
                      href={institution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={copyIndex === 1 ? -1 : undefined}
                      className="font-editorial trust-bar-item cursor-pointer whitespace-nowrap text-sm tracking-wide"
                    >
                      {institution.name}
                    </a>
                    <span
                      aria-hidden="true"
                      className="select-none text-sm"
                      style={{ color: 'var(--trust-bar-dot)' }}
                    >
                      ·
                    </span>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

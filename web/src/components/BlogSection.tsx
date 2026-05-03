import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'
import type { BlogPost } from '../types/site'

type Props = {
  posts: BlogPost[]
}

export function BlogSection({ posts }: Props) {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <h2 className="mb-4 text-4xl font-bold text-white">Psicoeducación Sexual</h2>
          <p className="text-slate-500">
            Herramientas y artículos para entender nuestra propia humanidad.
          </p>
        </div>
        <span className="hidden items-center gap-2 font-bold text-rose-500 md:flex">
          Explorar Biblioteca <ChevronRight size={18} aria-hidden />
        </span>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/articulos/${post.slug}`}
            className="group block cursor-pointer rounded-[2.5rem] border border-transparent bg-slate-900/50 p-4 transition-all duration-500 hover:border-rose-500/30"
          >
            <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <BookOpen
                  size={48}
                  className="text-rose-500/20 transition-all duration-700 group-hover:scale-110 group-hover:text-rose-500"
                  aria-hidden
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-2 inline-block rounded-lg bg-rose-500 px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-white shadow-lg">
                  {post.category}
                </div>
                <h4 className="text-xl font-bold leading-tight text-white transition-colors group-hover:text-rose-400">
                  {post.title}
                </h4>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium italic text-slate-500">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                Lectura 5 min <ChevronRight size={12} aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

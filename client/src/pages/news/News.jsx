const News = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[320px]">
        <h1 className="heading-1">From the journal</h1>
      </div>

      <div>
        <article className="grid lg:grid-cols-2 gap-10">
          <div className="h-full w-full overflow-hidden">
            <img className="h-full w-full object-center object-cover" src="https://framerusercontent.com/images/m3aextLVascviLxu8cwPgM5Dv4.jpg?scale-down-to=1024" alt="" loading="lazy" />
          </div>

          <div>

          </div>
        </article>
      </div>
    </div>
  )
}

export default News
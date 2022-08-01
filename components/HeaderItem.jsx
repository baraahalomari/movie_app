

const HeaderItem = ({title, Icon}) => {
  return (
    <div className="group w-12 flex flex-col items-center hover:text-white cursor-pointer sm:w-20">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  )
}

export default HeaderItem
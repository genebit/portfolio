const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative inline-flex">
        <div className="w-8 h-8 rounded-full bg-rose-500"></div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-rose-500 animate-ping"></div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-rose-500 animate-pulse"></div>
      </div>
    </div>
  )
}

export default LoadingPage

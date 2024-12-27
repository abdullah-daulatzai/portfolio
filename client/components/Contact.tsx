export default function Contact() {
  return (
    <>
      <div className=" flex flex-col">
        <div className="flex w-14 flex-col">
          <label htmlFor=""> Name</label>
          <input type="text" />
        </div>
        <div className="flex w-14 flex-col">
          <label htmlFor=""> Email</label>
          <input type="text" />
        </div>
      </div>
    </>
  )
}

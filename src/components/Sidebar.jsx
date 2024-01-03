import { NavLink } from "react-router-dom"
import { data } from "../constants/data"

const Sidebar = () => {

  return (
    <aside className="absolute top-0 left-0 right-[100%] sm:relative bg-mobile sm:bg-desktop sm:bg-cover bg-no-repeat w-[100%] h-[100%] pt-8 sm:pl-8 sm:basis-[30%] sm:rounded-lg flex items-start justify-center sm:flex-col sm:justify-start">
    {data.map((items,key)=>{
      return (
        <div
        key={key}
        className="flex items-center space-x-4 leading-4 sm:mb-10">
           {/* <NavLink
           style={({isActive})=>({
            color:(isActive)?"#000" : "hsl(229, 24%, 87%)",
            background:isActive? "none":"2px solid hsl(229, 24%, 87%)",
            fontWeight: "500",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
           })}
           to={items.linkTo}>
           {items.id}
           </NavLink> */}
           {items.id}
           <div>
              <p className="hidden sm:block uppercase text-neutral-coolGray text-[14px]">
                {items.step}
              </p>
              <p className="hidden sm:block uppercase text-neutral-lightGray font-[500] tracking-wider">
                {items.title}
              </p>
            </div>
        </div>
      )
    }

    )}
    </aside>
  )
}

export default Sidebar
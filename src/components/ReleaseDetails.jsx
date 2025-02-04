"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ReleaseDetails = ({ onClose }) => {
  // const ReleaseDetails = () => {
  return (
    <Drawer open={true}>
      {/* <Drawer> */}
      {/* <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger> */}
      <DrawerContent>
        <div className="  mx-auto w-full ">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Release Id</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <img className="w-32 h-32" src="/public/release.png" />
              </div>
            </div>
            <div className="mt-3 h-[120px]">
              {" "}
              <div className="flex justify-between items-center p-2 mr-8 ml-8 mb-2 ">
                <p>Version: 1.0.0 </p>
                <p> Release Notes: This is first Release</p>
              </div>
              <div className="flex justify-between items-center p-2 mr-8 ml-8">
                <p>Size: 1.2MB</p>
                <p>FileExtension: .apk</p>
              </div>
            </div>
          </div>
          {/* <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center"></div>
            </div>
            <div className="mt-3 h-[120px]"></div>
          </div> */}
          <DrawerFooter>
            <Button onClick={onClose}>Close</Button>
            {/* <DrawerClose asChild>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </DrawerClose> */}
          </DrawerFooter>
          {/* <DrawerFooter>
            <Button>Close</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ReleaseDetails;

// ------------------------------------------------------------------------------------------------------

// const ReleaseDetails = ({ isReleaseDetailsVisible, releaseData }) => {
//   const [goal, setGoal] = React.useState(350);
//   const [isOpen, setIsOpen] = React.useState(isReleaseDetailsVisible);
//   // function onClick(adjustment) {
//   //   setGoal(Math.max(200, Math.min(400, goal + adjustment)));
//   // }
//   React.useEffect(() => {
//     // Update drawer visibility based on prop change
//     setIsOpen(isReleaseDetailsVisible);
//   }, [isReleaseDetailsVisible]);

//   return (
//     // <Drawer>
//     // open={isOpen}:
//     // The open prop controls whether the drawer is visible or not.
//     // isOpen is a state variable  that determines if the drawer should be visible.
//     // If isOpen is true, the drawer will be visible; if false, it will be hidden.
//     // When the drawer is opened or closed, onOpenChange is triggered, and the setIsOpen function is called to update the isOpen state accordingly.
//     <Drawer open={isOpen} onOpenChange={setIsOpen}>
//       {/* <DrawerTrigger asChild>
//         <Button variant="outline">Open Drawer</Button>
//       </DrawerTrigger> */}
//       <DrawerContent>
//         <div className="  mx-auto w-full ">
//           {/* <DrawerHeader>
//             <DrawerTitle>Move Goal</DrawerTitle>
//             <DrawerDescription>Set your daily activity goal.</DrawerDescription>
//           </DrawerHeader> */}
//           <DrawerHeader>
//             {/* Use the releaseData to dynamically display release name */}
//             <DrawerTitle>Release Details: {releaseData.release}</DrawerTitle>
//             {/* You can also add other fields here like version */}
//             <DrawerDescription>
//               Version: {releaseData.version}
//             </DrawerDescription>
//           </DrawerHeader>
//           <div className="p-4 pb-0">
//             {/* You can render additional fields from releaseData here */}
//             <div className="text-left">
//               <h3 className="text-xl font-semibold">
//                 File Extension: {releaseData.fileExtension}
//               </h3>
//               {/* Add more details as needed */}
//             </div>
//             <div className="mt-3 h-[120px]">
//               {/* You can add charts, graphs, or any other data visualization */}
//             </div>
//           </div>
//           {/* <div className="p-4 pb-0">
//             <div className="flex items-center justify-center space-x-2">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="h-8 w-8 shrink-0 rounded-full"
//                 onClick={() => onClick(-10)}
//                 disabled={goal <= 200}
//               >
//                 <Minus />
//                 <span className="sr-only">Decrease</span>
//               </Button>
//               <div className="flex-1 text-center">
//                 <div className="text-7xl font-bold tracking-tighter">
//                   {goal}
//                 </div>
//                 <div className="text-[0.70rem] uppercase text-muted-foreground">
//                   Calories/day
//                 </div>
//               </div>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="h-8 w-8 shrink-0 rounded-full"
//                 onClick={() => onClick(10)}
//                 disabled={goal >= 400}
//               >
//                 <Plus />
//                 <span className="sr-only">Increase</span>
//               </Button>
//             </div> */}
//           {/* <div className="mt-3 h-[120px]">
//               <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={data}>
//                   <Bar
//                     dataKey="goal"
//                     style={{
//                       fill: "hsl(var(--foreground))",
//                       opacity: 0.9,
//                     }}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div> */}
//           <DrawerFooter>
//             <Button>Download</Button>
//             <DrawerClose asChild>
//               <Button variant="outline">Close</Button>
//             </DrawerClose>
//           </DrawerFooter>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default ReleaseDetails;
// --------------------------------------------------------------------------------------
// const ReleaseDetails = ({ isReleaseDetailsVisible, releaseData }) => {
//   const [isOpen, setIsOpen] = React.useState(isReleaseDetailsVisible);

//   React.useEffect(() => {
//     setIsOpen(isReleaseDetailsVisible);
//   }, [isReleaseDetailsVisible]);

//   // React.useEffect(() => {
//   //   setIsOpen(isReleaseDetailsVisible);
//   //   return () => {
//   //     // Cleanup any side effects here when modal is closed
//   //   };
//   // }, []);

//   return (
//     <Drawer open={isOpen} onOpenChange={setIsOpen}>
// <DrawerContent>
//   <div className="  mx-auto w-full ">
//     <DrawerHeader>
//       <DrawerTitle>Release Details: {releaseData.release}</DrawerTitle>

//       <DrawerDescription>
//         Version: {releaseData.version}
//       </DrawerDescription>
//     </DrawerHeader>
//     <div className="p-4 pb-0">
//       <div className="text-left">
//         <h3 className="text-xl font-semibold">
//           File Extension: {releaseData.fileExtension}
//         </h3>
//       </div>
//       <div className="mt-3 h-[120px]"></div>
//     </div>

//     <DrawerFooter>
//       <Button>Download</Button>
//       <DrawerClose asChild>
//         <Button variant="outline">Close</Button>
//       </DrawerClose>
//     </DrawerFooter>
//   </div>
// </DrawerContent>
//     </Drawer>

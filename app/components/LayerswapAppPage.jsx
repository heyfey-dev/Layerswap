// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from 'next/navigation';
// import { TokenProvider, useTokenContext } from "../context/TokenContext";
// import LayerswapAppContent from '../subpage/LayerswapAppContent';
// import CampaignsSubpage from '../subpage/campaigns/page';

// const LayerswapAppPage = () => {
//   const router = useRouter();
//   const { subpage } = router.query;

//   return (
//     <TokenProvider>
//       <div className="font-sans bg-[#0c1526] md:bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] min-h-screen w-full py-5">
//         <div className="container mx-auto md:w-[35%] relative">
//           {subpage === 'campaigns' ? (
//             <CampaignsSubpage />
//           ) : (
//             <LayerswapAppContent />
//           )}
//         </div>
//       </div>
//     </TokenProvider>
//   );
// };

// export default LayerswapAppPage;
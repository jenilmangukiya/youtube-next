import { useState } from "react";

import { Stack, Typography, useTheme } from "@mui/material";

import { useStyle } from "./useStyle";

const bodyContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
eum animi molestiae itaque ipsam est sint. Iste in deserunt
laborum neque, totam, vitae cumque esse earum doloribus cum rerum
pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quia error ratione, quam ex accusamus laudantium voluptatem
voluptate reprehenderit nihil obcaecati! Fuga quaerat perferendis
laborum accusamus qui quas nobis nam obcaecati aliquam fugiat
quibusdam, maiores provident eaque quod deserunt delectus
architecto minus animi asperiores ipsa. Saepe expedita maiores
unde porro aut at id, cumque laboriosam eaque adipisci veniam,
necessitatibus nobis aliquid, sapiente officiis! Atque nulla,
voluptatem odit provident numquam unde fugiat in explicabo
voluptate, maxime rerum ratione odio accusamus soluta porro totam
perspiciatis suscipit laboriosam. Quam odit, molestias quae
eligendi quaerat eaque ea ex, ab quo porro optio itaque quas, a
minus. Magni exercitationem a dolore ullam tenetur, voluptas ipsa
odit iure fugiat, deleniti aliquid tempore vel repellat dolorem?
Sequi explicabo aliquam odit laborum quisquam architecto
voluptatibus amet ipsam earum nihil, porro consectetur ut.
Architecto veniam consequuntur, recusandae nesciunt quae
repudiandae magnam nam commodi atque pariatur aspernatur nostrum
quam reiciendis? Adipisci ab quod nihil architecto! Commodi dicta
sunt nobis enim, molestiae consequatur doloremque quas eos
delectus eligendi in aliquam non aliquid at alias quibusdam
voluptatem ad reiciendis corporis? Pariatur rerum tempore maxime
odit nulla itaque quas ut dignissimos expedita eaque cupiditate,
cum, officiis ducimus excepturi odio perferendis veritatis. Culpa
quod, sunt enim excepturi consequuntur dolore ipsa accusantium
impedit ducimus aperiam vel corrupti esse, nisi quasi vitae
laboriosam illo totam. Odio esse facere dolores labore ea unde
suscipit. Fuga ducimus quia sunt enim quis fugit nisi
reprehenderit corporis, consequuntur assumenda facere hic ipsum
necessitatibus tempora accusantium doloremque quos ea laborum!
Amet atque eaque nesciunt, ducimus hic assumenda nisi nemo? Nobis
ipsum autem molestias deleniti aliquam asperiores aliquid
distinctio minus, eveniet consectetur dignissimos dolore
laboriosam nesciunt dolorum sed ab officiis rem ducimus nihil,
ratione laudantium, cupiditate sunt error magni. Earum porro,
magni debitis aut quam asperiores, deserunt quaerat illum delectus
dolore fuga qui.`;

const VideoCaption = () => {
  const theme = useTheme();
  const [open, setIsOpen] = useState(false);
  const { caption, captionContent, loadMoreButton } = useStyle(theme, open);

  return (
    <Stack sx={caption} direction={"column"}>
      <Typography variant="caption" color={theme.palette.white?.main}>
        1.6K views 5 hours ago
      </Typography>
      <Typography
        variant="caption"
        color={theme.palette.white?.main}
        sx={captionContent}
      >
        {bodyContent}
      </Typography>
      <Typography
        variant="caption"
        sx={loadMoreButton}
        onClick={() => setIsOpen(!open)}
      >
        {open ? "...less" : "...more"}
      </Typography>
    </Stack>
  );
};

export default VideoCaption;

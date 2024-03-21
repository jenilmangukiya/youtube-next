import { VideoCardProps } from "./types";
import VideoCard from "./VideoCard";

const meta = {
  title: "Components/VideoCard",
  component: VideoCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
};

export default meta;
type Story = typeof meta.parameters;

const content = {
  title:
    "Shree Radha Rani Mashup 2023 - (Radha Ashtami Special) - HS Visual Music x Papul | New Bhajan Songs asdf asdf asdf asfg asfg asfg asf gadf gaf basdfg as fd",
  createdAt: "1 day ago",
  owner: "Carry Minati Live",
  views: "837K",
  thumbnail: "https://source.unsplash.com/random?wallpapers"
};

export const DefaultVideoCard = (args: VideoCardProps) => {
  return <VideoCard {...args} />;
};

DefaultVideoCard.args = content;

export const HorizontalLargeVideoCard = (args: VideoCardProps) => {
  return <VideoCard {...args} />;
};

HorizontalLargeVideoCard.args = {
  ...content,
  variant: "horizontal",
  size: "large",
  caption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat delectus sint consectetur esse error dolorem accusamus unde atque ipsa nemo iure, amet quis, accusantium illo veniam quam velit a necessitatibus facilis alias architecto."
};

export const HorizontalSmallVideoCard = (args: VideoCardProps) => {
  return <VideoCard {...args} />;
};

HorizontalSmallVideoCard.args = {
  ...content,
  variant: "horizontal"
};

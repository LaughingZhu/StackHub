/*
 * @Date: 2024-10-28 15:32:24
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-28 16:34:54
 * @Description:
 */
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
interface Props {
  img?: string;
  name?: string;
}

export function AvatarLogo(props: Props) {
  const { img, name } = props;
  return (
    <Avatar>
      <AvatarImage src={img} alt='logo' />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}

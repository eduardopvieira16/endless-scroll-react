import { UserCountry } from "../UserCountry";
import { UserEmail } from "../UserEmail";
import { UserName } from "../UserName";
import { UserPicture } from "../UserPicture";
import { CardContainer } from "./styles";

export function Card({ user }) {
  return (
    <CardContainer>
      <UserPicture src={user.picture} alt={user.name} />
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>
      <UserCountry>{user.country}</UserCountry>
    </CardContainer>
  );
}

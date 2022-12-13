import styled from "styled-components";
import IconHome from "./icon/IconHome";
import IconMessageCircle from "./icon/IconMessageCircle";
import IconEdit from "./icon/IconEdit";
import IconUser from "./icon/IconUser";

const MenuContainer = styled.footer`
  width: 100%;
  position: fixed;
  border-top: 0.5px solid #dbdbdb;
  bottom: 0%;
  padding: 12px 0 10px;
`;

const ListContainer = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ItemContainer = styled.li`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

function TabMenu() {
  return (
    <MenuContainer>
      <nav>
        <ListContainer>
          <ItemContainer>
            <IconHome />
            <p>홈</p>
          </ItemContainer>
          <ItemContainer>
            <IconMessageCircle />
            <p>채팅</p>
          </ItemContainer>
          <ItemContainer>
            <IconEdit />
            <p>게시물 작성</p>
          </ItemContainer>
          <ItemContainer>
            <IconUser />
            <p>프로필</p>
          </ItemContainer>
        </ListContainer>
      </nav>
    </MenuContainer>
  );
}

export default TabMenu;
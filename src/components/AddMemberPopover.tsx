import React, { useState } from 'react';
import { MenuSurfaceAnchor, MenuItem, MenuSurface } from '@rmwc/menu';
import '@rmwc/menu/styles';
import styled from 'styled-components';

import { UtilButton, BtnDescription, Icon } from './common/ModalComponents';
import addMemberIcon from '../icons/BoardCard/Group 40.svg';
import CustomSelectMember from '../components/CustomSelect';
import CrossMark from '../icons/crossmark.svg';
import DeleteIcon from '../icons/trash-can-red.svg';

const AddMemberPopover = (props: any) => {
  const { selectItems, memberNames, deselectMember, isSideBar, ...otherProps } = props;
  const [open, setOpen] = useState(false);
  const numberOfMember = memberNames.length;
  return (
    <MenuSurfaceAnchor>
      <CustomMenuSurface
        isSideBar={isSideBar}
        anchorCorner="bottomStart"
        open={open}
        onClose={(evt: MouseEvent) => setOpen(false)}
      >
        <ContentWrapper>
          <CloseBtn onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpen(false)} />
          <Title>Members</Title>
          <CustomSelectMember selectItems={selectItems} />
          {numberOfMember === 0 && <CustomMenuItem disabled={true}>There is no member !!!</CustomMenuItem>}
          {numberOfMember !== 0 &&
            memberNames.map((item: string, index: any) => (
              <CustomMenuItem key={index} disabled={true}>
                {item}
                <CloseBtn isMenuItem onClick={() => deselectMember(item)} />
              </CustomMenuItem>
            ))}
        </ContentWrapper>
      </CustomMenuSurface>
      <UtilButton onClick={(evt) => setOpen(!open)}>
        <Icon addMember src={addMemberIcon} />
        <BtnDescription>{isSideBar ? 'Members' : 'Add Members'}</BtnDescription>
      </UtilButton>
    </MenuSurfaceAnchor>
  );
};
export default AddMemberPopover;

const CustomMenuSurface = styled(({ isSideBar, ...props }) => <MenuSurface {...props} />)`
  width: 100%;
  ${(props) => (props.isSideBar ? `left:unset !important; right: 0; width: 240px` : ``)};
`;

const CustomMenuItem = styled(({ ...props }) => <MenuItem {...props} />)`
  font-size: 1rem;
`;
const ContentWrapper = styled.div`
  position: relative;
  height: 200px;
  padding: 12px;
`;
const Title = styled.div`
  font-family: 'ProximaNovaBold', sans-serif;
  margin-bottom: 12px;
  font-size: 1rem;
`;
const CloseBtn = styled.button<{ isMenuItem?: boolean }>`
  border: 0;
  font-family: 'ProximaNovaBold', sans-serif;
  background: url(${(props) => (props.isMenuItem ? DeleteIcon : CrossMark)});
  background-size: 100% 100%;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 12px;
  &:hover {
    cursor: pointer;
  }
`;

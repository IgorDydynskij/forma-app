import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem
} from '@mui/material';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isOpen2, setOpen2] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleOpen2 = (): void => {
    setOpen2(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  const handleClose2 = (): void => {
    setOpen2(false);
  };

  return (
    <>
      <ListWrapper
        
      >
        <List disablePadding component={Box} >
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  eSIMGO
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboards/purchases">
          Purchases
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboards/packages">
          Packages
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboards/countries">
          Countries
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboards/support">
          Support
        </MenuItem>
      </Menu>


     {/* <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
         <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen2}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  TravelSim
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose2} open={isOpen2}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboards/purchases">
          Packages
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/travelsim/transactions">
          Purchases
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboards/countries">
          Countries
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/travelsim/support">
          Support
        </MenuItem>
      </Menu> */}
      
    </>
  );
}

export default HeaderMenu;

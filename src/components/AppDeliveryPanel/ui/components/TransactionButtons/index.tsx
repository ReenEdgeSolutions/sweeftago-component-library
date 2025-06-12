import { AppButton } from "../../../../AppButton"
import { RowStack } from "../../../../RowStack"
import { StyledImage } from "../../../../StyledImage"
import sortIcon from "../../assets/icon/sort.svg"
import filterIcon from "../../assets/icon/filter.svg"
import arrowIcon from "../../assets/icon/arrow-down.svg"

interface TransactionButtonsProps {
  handleFilterClick: () => void;
  handleSortClick: () => void;
}

export const TransactionButtons = ({
  handleFilterClick,
  handleSortClick,
}: TransactionButtonsProps) => {
  return(
    <RowStack justifyContent="space-between" alignItems="center" mb="21px">
    <AppButton
      startIcon={
        <StyledImage
          src={filterIcon}
          alt="filter"
          sx={{
            width: {xs:"20px",sm: "24px"},
            height: {xs:"20px",sm: "24px"},
          }}
        />
      }
      endIcon={
        <StyledImage
          src={arrowIcon}
          alt="arrow"
          sx={{
            width: {xs:"20px",sm: "24px"},
            height: {xs:"20px",sm: "24px"},
          }}
        />
      }
      sx={{
        color: "#615D5D",
        p: {xs:0, sm: "12px 16px"},
        border: "1px solid #D5D5D5",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      onClick={handleFilterClick}
      disableArrow
    >
      Filter by status
    </AppButton>

    <AppButton
      startIcon={
        <StyledImage
          src={sortIcon}
          alt="filter"
          sx={{
            width: "24px",
            height: "24px",
            marginRight: "10px",
          }}
        />
      }
      endIcon={
        <StyledImage
          src={arrowIcon}
          alt="arrow"
          sx={{
            width: "24px",
            height: "24px",
            marginLeft: "10px",
          }}
        />
      }
      sx={{
        color: "#615D5D",
        p: "12px 16px",
        border: "1px solid #D5D5D5",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      onClick={handleSortClick}
      disableArrow
    >
      Sort by Date
    </AppButton>
  </RowStack>
  )
}
import React, { FC } from "react";
import { IState as IProps } from "../App";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const ListCategory: FC<IProps> = ({ mealcategory }) => {

  const renderCategory = (): JSX.Element[] => {
    return mealcategory.map((category) => (
      <Card sx={{ maxWidth: 250, margin: "10px" }} key={category.idCategory}>
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={category.strCategoryThumb}
            alt={`category${category.idCategory}`}
          />
          <Typography variant="h5" component="div">
            {category.strCategory}
          </Typography>
        </CardContent>
      </Card>
    ));
  };
  return <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>{renderCategory()}</Box>;
};

export default ListCategory;

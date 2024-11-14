import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbStarFilled, TbBookmark, TbBookmarkFilled } from "react-icons/tb";
import { useQuery } from "react-query";
import axios from "axios";

function CardComponent(props) {
  
  const { isLoading, data, err } = useQuery("recipes", () => {
    return axios.get('https://dummyjson.com/recipes?limit=10').then(res => res.data)
  });
  
  if(isLoading) return (
    <p>Loading...</p>
  )
  if(err) {
    return (
      <p>Something went wrong!</p>
    )
  }
  console.log(data);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 py-5 gap-5">
      {
        data.recipes.filter(obj => obj.name.toLowerCase().includes(props.searchInputValue.toLowerCase())).map((recipe) => (
          <Card key={recipe.id}>
            {console.log(recipe)}
            <CardHeader>
              <img
                src={recipe.image}
                alt=""
                loading="lazy"
                className="rounded"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <CardTitle className="line-clamp-1">{recipe.name}</CardTitle>
              <p className="text-sm font-semibold line-clamp-3 lg:line-clamp-2">
                <span className="font-medium">Ingredients:</span>{" "}
                {recipe.ingredients.join(", ")}
              </p>
              <p className="text-sm font-semibold">
                <span className="font-medium">Mealtype:</span>{" "}
                {recipe.mealType.join(", ")}
              </p>
              <p className="text-sm font-semibold">
                <span className="font-medium">Preptime:</span>{" "}
                {recipe.prepTimeMinutes} min
              </p>
              <p className="text-sm font-semibold text-yellow-400 flex items-center gap-1">
                <TbStarFilled />
                <span>{recipe.rating}</span>
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  recipe.difficulty == "Easy"
                    ? "bg-green-700"
                    : recipe.difficulty == "Medium"
                    ? "bg-yellow-600"
                    : "bg-red-700"
                }`}
              >
                <p>{recipe.difficulty}</p>
              </div>
              <div className="px-3 py-1 rounded-full text-white text-sm bg-blue-700">
                <p>{recipe.cuisine}</p>
              </div>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}

export default CardComponent;

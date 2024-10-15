import { recipes } from "@/app/data";
import { Metadata} from "next";
import { notFound } from "next/navigation";

export  function generateMetadata2({ params} : {params : {id :string};}): Metadata {
    const recipe = recipes.find(
        (element) => element.id === parseInt(params.id)
    );

    return {
           title : recipe?.title,
           description: recipe?.description
    }

}

export default function page({params} : {params : {id: string}}){
    const recipe = recipes.find(
        (element) => element.id === parseInt(params.id)
    );
    if(parseInt(params.id) > recipes.length) {
        notFound();
    }

    return (
         <> 
           {recipe && (
            <div className="p-5">
              <h2>
                {recipe.title}
              </h2>
              <p>{recipe.description}</p>

              <small> Make By {recipe.author} at {recipe.date}</small>
            </div>
           )}
         
         
         </>
    )
}

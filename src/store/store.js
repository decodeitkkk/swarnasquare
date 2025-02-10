// import { create } from "zustand";

// const useDropdownStore = create((set) => ({
//   walletoptions: [],

//   addDiv: (label) =>
//     set((state) => ({
//       walletoptions: [...state.walletoptions, label],
//     })),

//   removeDiv: (label) =>
//     set((state) => ({
//       walletoptions: state.walletoptions.filter((item) => item !== label),
//     })),
// }));


// export default useDropdownStore;
import { create } from "zustand";

const useDropdownStore = create((set) => ({
  walletoptions: [],
  selectedCategories: new Set(), // Track which main categories are selected
  categoryOptions: {}, // Track suboptions for each category

  addDiv: (category, label) =>
    set((state) => ({
      walletoptions: [...state.walletoptions, label],
      selectedCategories: new Set([...state.selectedCategories, category]),
      categoryOptions: {
        ...state.categoryOptions,
        [category]: [...(state.categoryOptions[category] || []), label],
      },
    })),

  removeDiv: (category, label) =>
    set((state) => {
      if (!state.categoryOptions[category]) return state; // ✅ Prevent undefined error

      const newCategoryOptions = { ...state.categoryOptions };
      newCategoryOptions[category] = newCategoryOptions[category].filter(
        (item) => item !== label
      );

      if (newCategoryOptions[category].length === 0) {
        delete newCategoryOptions[category];
        const newCategories = new Set(state.selectedCategories);
        newCategories.delete(category);
        return {
          walletoptions: state.walletoptions.filter((item) => item !== label),
          selectedCategories: newCategories,
          categoryOptions: newCategoryOptions,
        };
      }

      return {
        walletoptions: state.walletoptions.filter((item) => item !== label),
        categoryOptions: newCategoryOptions,
      };
    }),

}));

export default useDropdownStore;

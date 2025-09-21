import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Map category names to folder names
 */
export const categoryToFolderMap: { [key: string]: string } = {
  'fitness': 'fitness',
  'events': 'event',
  'transformation': 'Transformation',
  'community': 'community engagement',
  'space': 'our space'
};

/**
 * Gets the folder name for a specific category
 * @param category - The category name
 * @returns The corresponding folder name
 */
export function getFolderNameForCategory(category: string): string {
  return categoryToFolderMap[category] || category;
}
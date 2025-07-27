export type RootStackParamList = {
  Home: undefined;
  Second: { name: string }; // 👈 This param will be passed
  ViewPager : undefined; // 👈 Add this line for ViewPager screen
  Assignment: undefined; // 👈 Add this line for Assignment screen
};

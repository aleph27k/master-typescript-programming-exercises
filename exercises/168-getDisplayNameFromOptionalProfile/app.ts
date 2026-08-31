function getDisplayName(profile: Profile): string {
  return profile.nickname ?? profile.firstName;
}

export {};
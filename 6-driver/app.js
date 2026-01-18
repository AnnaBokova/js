const hasLicence = true;
const age = 22;
const isDrunk = false;

const result = console.log(
  (hasLicence ?? false) && (age ?? 0) > 18 && !(isDrunk ?? true)
    ? "может"
    : "не может"
);

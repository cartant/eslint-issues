import React, { FC } from "react";
import { of } from "rxjs";

of(42).subscribe(async (value) => await value);

export const SomeComponent: FC<{}> = () => <span>some component</span>;

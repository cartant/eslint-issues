import React, { FC } from "react";
import { Observable, of } from "rxjs";

// The problem is that the selectors for no-async-subscribe use 'has' and that
// effects a traversal. Adding the following (unnecessary) type assertions will
// break this repro - as their node types won't be present in the visitor keys.
// It failure isn't the same as what Felix originally reported - it loops
// forever - but this is the same as what he saw after upgrading esquery.

(of(42 as number) as Observable<number>).subscribe(async (value) => await value);

export const SomeComponent: FC<{}> = () => <span>some component</span>;

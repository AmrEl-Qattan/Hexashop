"use client"
import { useEffect } from "react";

import React from 'react'

export default function BootstrapClient() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
  return null;
}

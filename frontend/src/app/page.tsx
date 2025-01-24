"use client"
import { Box, Counter, Flex, Heading, Icon, SubIcon, Text } from "@vibe/core";
import { use, useEffect, useMemo, useState } from "react";
import { Archive, Heart, Health, Versioning, Check, Close } from "@vibe/icons"

interface Cell {
  metadata: { name: string }, 
  spec: {
    account: string,
    region: string, 
    resourceRefs: [
      {
        apiVersion: string,
        kind: string,
        name: string
      }
    ],
    size: string
  }, status: {
    conditions:
    {
      lastTransitionTime: string,
      reason: string,
      status: string,
      type: string
    }[]
  }
}


export default function Home() {

  const [cells, setCells] = useState([] as Cell[])
  useEffect(() => {
    fetch('http://localhost:4000/cells', {
      next: {
        revalidate: 0
      },
    }).then(res => res.json())
      .then(cells => setCells(cells))
      .catch(err => console.error(err))
  }, [])

  const icons: Record<string, SubIcon> = {
    Bucket: Archive
  }

  return (
    <Flex gap={6}>
      {
        cells && cells.map(cell =>
          <Box border padding="medium" rounded="small" key={cell.metadata.name}>
            <Heading type="h2">{cell.metadata.name}</Heading>
            <Text color="secondary">{cell.spec.account} &bull; {cell.spec.region}</Text>

            {cell.status.conditions.map(cond =>
              <Flex key={cond.type}>
                <Icon icon={cond.status === 'True' ? Check : Close}></Icon>
                <Text>{cond.type}</Text>
              </Flex>
            )}

          </Box>
        )
      }
    </Flex>
  );
}

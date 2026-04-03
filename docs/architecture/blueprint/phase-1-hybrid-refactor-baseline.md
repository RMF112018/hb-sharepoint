# Phase 1 Hybrid Refactor Baseline

## Purpose

This note records the approved Prompt-01 baseline for the phase-1 hybrid homepage refactor.

## Approved baseline

- Phase-1 architecture is a hybrid composition model, not an all-custom homepage shell.
- Custom web parts are approved for: shell/hero, featured projects, company pulse, and quick actions.
- Native SharePoint composition is approved for: news, selected quick links, events, and additional editorial modules where native behavior is sufficient.
- Source ownership should be decomposed into focused shared and feature units while maintaining clean package boundaries.
- Phase 1 keeps one deployable SPFx solution by default; deployable splitting is deferred unless later prompts establish a concrete operational need.

## Closure conditions

This planning item is considered closed when:

- phase-1 prompt package docs treat Prompt-01 as executed baseline
- custom-vs-native classification is explicitly documented
- current-state governance docs reference this baseline note
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- phase-1 prompt package summary and README mark Prompt-01 as executed baseline
- the decision matrix and deployment strategy are documented in phase-1 records
- current-state governance docs reference this closure note as authority
- root manifest patch version has been advanced for this governance update

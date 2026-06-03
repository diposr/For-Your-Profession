#!/usr/bin/env node

/**
 * Generate OG Image for FYP
 * Creates a 1200×630 PNG with dark background, FYP wordmark, tagline, and accent color
 */

import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const OUTPUT_PATH = path.join(__dirname, '../public/og-image.png')
const WIDTH = 1200
const HEIGHT = 630
const BG_COLOR = '#131313'
const ACCENT_COLOR = '#FF4D1C'
const TEXT_COLOR = '#FFFFFF'
const SUBTEXT_COLOR = '#A0A0A0'

async function generateOGImage() {
  try {
    console.log('Generating OG image...')

    // Create SVG for the OG image
    const svg = `
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;500&amp;display=swap');
            .wordmark { font-family: 'Inter', 'Cabinet Grotesk', sans-serif; font-weight: 700; }
            .tagline { font-family: 'Inter', 'Cabinet Grotesk', sans-serif; font-weight: 500; }
          </style>
        </defs>

        <!-- Background -->
        <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG_COLOR}"/>

        <!-- Accent decorative circle (top right) -->
        <circle cx="${WIDTH - 200}" cy="150" r="80" fill="${ACCENT_COLOR}" opacity="0.1"/>
        <circle cx="${WIDTH - 300}" cy="100" r="40" fill="${ACCENT_COLOR}" opacity="0.15"/>

        <!-- FYP Wordmark -->
        <text x="${WIDTH / 2}" y="280" text-anchor="middle" class="wordmark" fill="${TEXT_COLOR}" font-size="120" letter-spacing="-4">
          FYP
        </text>

        <!-- Tagline -->
        <text x="${WIDTH / 2}" y="380" text-anchor="middle" class="tagline" fill="${TEXT_COLOR}" font-size="36">
          Scroll Smarter, Learn Faster
        </text>

        <!-- Accent line -->
        <rect x="${WIDTH / 2 - 50}" y="430" width="100" height="4" fill="${ACCENT_COLOR}" rx="2"/>

        <!-- Footer brand -->
        <text x="${WIDTH / 2}" y="580" text-anchor="middle" class="tagline" fill="${SUBTEXT_COLOR}" font-size="20" opacity="0.6">
          For Your Profession
        </text>
      </svg>
    `

    // Convert SVG to PNG
    await sharp(Buffer.from(svg))
      .resize(WIDTH, HEIGHT)
      .png()
      .toFile(OUTPUT_PATH)

    console.log(`✓ OG image generated: ${OUTPUT_PATH}`)

    // Verify file exists and get size
    const stats = fs.statSync(OUTPUT_PATH)
    console.log(`  Size: ${(stats.size / 1024).toFixed(2)} KB`)

  } catch (error) {
    console.error('Error generating OG image:', error)
    process.exit(1)
  }
}

generateOGImage()
